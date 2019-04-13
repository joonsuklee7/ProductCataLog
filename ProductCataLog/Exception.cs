using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Filters;
namespace ProductCataLog
{
    public class Exception: ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.BadRequest)
            {
                Content = new StringContent(actionExecutedContext.Exception.Message)
            };
            base.OnException(actionExecutedContext);
        }
    }
}