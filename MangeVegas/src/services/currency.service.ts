import type { currency } from "@/models/Currency"
import { getAxios } from "./services.config"

export const getEthereum = (): Promise<currency>=> {
    return getAxios().get("/ethusd");
}

export const getBitcoin = (): Promise<currency>=> {
    return getAxios().get("/btcusd");
}

export const getSolana = (): Promise<currency>=> {
    return getAxios().get("/solusd");
}

export const getAvalanche = (): Promise<currency>=> {
    return getAxios().get("/avaxusd");
}