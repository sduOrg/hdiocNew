package com.telchina.hdcgioc.core.exception.alert;


import com.telchina.hdcgioc.core.RestResponse;

/**
 * IExceptionAlert
 */
public interface IExceptionAlert {
    /**
     * alert
     *
     * @param errorResponse errorResponse
     */
    void alert(RestResponse<String> errorResponse);
}
