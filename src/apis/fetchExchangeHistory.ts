import { buildUrl, instance } from "@/utils";
import formatISO from "date-fns/formatISO"

export interface FetchExchangeHistoryData {
    startDate: Date;
    endDate: Date;
    base: string;
    targetedCurrency: string;
}

export interface FetchExchangeHistoryResult {
    rates: Record<string, number>;
}

const BASE_DOMAIN = "https://api.exchangerate.host";

const getValueForRate = (rate: any): number => Object.values(rate)[0] as number;

const fetchExchangeHistory = async ({
    base,
    endDate,
    startDate,
    targetedCurrency,
}: FetchExchangeHistoryData): Promise<FetchExchangeHistoryResult> => {
    const url = buildUrl(`${BASE_DOMAIN}/timeseries`, {
        base,
        symbols: [targetedCurrency],
        start_date: formatISO(startDate, {
            representation: "date",
        }),
        end_date: formatISO(endDate, {
            representation: "date",
        }),
    });

    const { data } = await instance.get(url);

    const rates = Object.entries(data.rates)
        .reduce((acc, [dateString, rate]: [string, any]) => {
            acc[dateString] = getValueForRate(rate);

            return acc;
        }, {} as Record<string, number>);

    return {
        rates,
    }
}

export default fetchExchangeHistory;
