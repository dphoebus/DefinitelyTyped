// Type definitions for fastify-rate-limit 2.0
// Project: https://github.com/fastify/fastify-rate-limit#readme
// Definitions by: Christian D <https://github.com/pc-jedi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Redis } from "ioredis";
import { FastifyRequest } from "fastify";
import { IncomingMessage } from "http";

declare function fastifyRateLimit(): void;

declare namespace fastifyRateLimit {
  interface FastifyRateLimitOptions<T = FastifyRequest<IncomingMessage>> {
    /**
     * Is the maximum number of requests a single client can perform inside a
     * timeWindow.
     *
     * default: 1000
     */
    max?: number;

    /**
     * The duration of the time window, can be expressed in milliseconds (as a
     * number) or as a string, see ms too see the supported formats
     *
     * default: 1000 * 60
     */
    timeWindow?: number;

    /**
     * This plugin internally uses a lru cache to handle the clients, you can
     * change the size of the cache with this option.
     *
     * default: 5000
     */
    cache?: number;

    /**
     * Array of string of ips to exclude from rate limiting.
     *
     * default: []
     */
    whitelist?: string[];

    /**
     * By default this plugins uses an in-memory store, which is fast but if
     * you application works on more than one server it is useless, since the
     * data is store locally. You can pass a Redis client here and magically
     * the issue is solved. To achieve the maximum speed, this plugins requires
     * the use of ioredis.
     *
     * default: null
     */
    redis?: Redis;

    /**
     * If `true` it will skip errors generated by the storage (eg, redis not
     * reachable).
     *
     * default: false
     */
    skipOnError?: boolean;

    /**
     * Function to generate a unique identifier for each incoming request.
     *
     * default: (req) => req.ip
     */
    keyGenerator?: (req: T) => string;
  }
}

export = fastifyRateLimit;
