import { ServiceMetadata } from "../peers";
import { AdminServiceClient } from "./AdminServiceClient";
import { AssetServiceClient } from "./AssetServiceClient";
import { BusinessServiceClient } from "./BusinessServiceClient";
import { ConversionServiceClient } from "./ConversionServiceClient";
import { IssuerClient } from "./IssuerClient";
import { PropertyServiceClient } from "./PropertyServiceClient";
import { UserServiceClient } from "./UserServiceClient";
import { WalletServiceClient } from "./WalletServiceClient";


/**
 * Setup proxy url of every client available.
 * @param url - the base url of the proxy that interconnects queryable rest apis of services
 */

export function configureProxyEndpoint(url: string){
    AdminServiceClient.url = url+"/admins";
    AssetServiceClient.url = url+"/assets";
    BusinessServiceClient.url = url+"/business";
    ConversionServiceClient.url = url+"/rates";
    IssuerClient.url = url+"/issuer";
    PropertyServiceClient.url = url+'/system/properties';
    UserServiceClient.url = url+'/users';
    WalletServiceClient.url = url+'/wallets';
}

/**
 * Setup client metadata on every client code connection to any service
 * @param meta the metadatas of the connecting client
 */
export function configureClientMetadata(meta: ServiceMetadata){
    AdminServiceClient.clientMetadata = meta;
    AssetServiceClient.clientMetadata = meta;
    BusinessServiceClient.clientMetadata = meta;
    ConversionServiceClient.clientMetadata = meta;
    IssuerClient.clientMetadata = meta;
    PropertyServiceClient.clientMetadata = meta;
    UserServiceClient.clientMetadata = meta;
    WalletServiceClient.clientMetadata = meta;
}

export function configureProxyAccess(url: string, meta: ServiceMetadata){
    configureProxyEndpoint(url);
    configureClientMetadata(meta);
}


export { AdminServiceClient } from "./AdminServiceClient";
export { AssetServiceClient } from "./AssetServiceClient";
export { BusinessServiceClient } from "./BusinessServiceClient";
export { ConversionServiceClient } from "./ConversionServiceClient";
export { IssuerClient } from "./IssuerClient";
export { PropertyServiceClient } from "./PropertyServiceClient";
export { UserServiceClient } from "./UserServiceClient";
export { WalletServiceClient } from "./WalletServiceClient";
export { ServiceAccess, ServiceClient } from "./ServiceClient";
export { JsonServiceClient } from "./JsonServiceClient";