import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import moment from "moment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(({ message, data, meta }) => ({
                message,
                data: JSON.parse(
                    JSON.stringify(data, (key, value) => {
                        if (/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/.test(value)) {
                            return moment(value).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return value;
                    }),
                ),
                meta,
            })),
        );
    }
}
