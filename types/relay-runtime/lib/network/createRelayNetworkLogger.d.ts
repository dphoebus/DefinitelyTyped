import { RelayNetworkLoggerTransaction } from './RelayNetworkLoggerTransaction';
import { RequestParameters } from '../util/RelayConcreteNode';
import { Variables, FetchFunction, SubscribeFunction } from '../../index';

export type GraphiQLPrinter = (request: RequestParameters, variables: Variables) => string;
export interface NetworkLogger {
    wrapFetch: (fetch: FetchFunction, graphiQLPrinter?: GraphiQLPrinter) => FetchFunction;
    wrapSubscribe: (subscribe: SubscribeFunction, graphiQLPrinter?: GraphiQLPrinter) => SubscribeFunction;
}

declare function createRelayNetworkLogger(LoggerTransaction: typeof RelayNetworkLoggerTransaction): NetworkLogger;

export { createRelayNetworkLogger };
