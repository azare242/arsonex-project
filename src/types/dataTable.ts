export interface ReturnOnInvestment {

    times: number;
    currency: string;
    percentage: number;

}
export interface CryptoData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number | null;  // Can be null
    max_supply: number | null;   // Can be null
    ath: number;
    ath_change_percentage: number;
    ath_date: string;           // ISO 8601 string
    atl: number;
    atl_change_percentage: number;
    atl_date: string;           // ISO 8601 string
    roi: null | ReturnOnInvestment; //  Explicitly define ROI's structure;  can be null
    last_updated: string;      // ISO 8601 string
}


export type CryptoDataList = CryptoData[]


