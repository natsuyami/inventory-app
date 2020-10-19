export class ApiEndpoints {
    public static baseUrl = "http://localhost:8081/ni";

    public static default = {
        auth : ApiEndpoints.baseUrl.concat("/oauth/token"),
        product : ApiEndpoints.baseUrl.concat("/product"),
        account : ApiEndpoints.baseUrl.concat("/account")
    };

    public static product = {
        food : ApiEndpoints.baseUrl.concat("/product/food")
    };

    public static management = {
        product : ApiEndpoints.baseUrl.concat("/management/product")
    };
}