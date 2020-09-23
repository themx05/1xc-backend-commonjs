import Axios from "axios";
import { ServiceMetadata } from "../peer-types";
import { ServiceClient } from "./ServiceClient";

export interface AssetMetadata {
    ext: string;
    mime: string;
    size: number;
}

export class AssetServiceClient extends ServiceClient{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(AssetServiceClient.url, AssetServiceClient.clientMetadata);
    }

    async getMetadata(file: string):Promise<AssetMetadata|undefined>{
        return Axios.get(
            `${this.url}/${file}/metadata`,
            {
                headers: {
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.status === 200 && res.data.success){
                return res.data.data;
            }
            return undefined;
        })
    }
}