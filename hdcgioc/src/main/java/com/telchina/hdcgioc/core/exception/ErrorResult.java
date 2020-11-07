/**
 * ErrorResult.java Created at 2016-09-27 Created by wangkang Copyright (C) 2016 itkk.org, All
 * rights reserved.
 */
package com.telchina.hdcgioc.core.exception;

import com.telchina.hdcgioc.core.RestResponse;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

// import io.swagger.annotations.ApiModelProperty;

/**
 * 描述 : 错误信息
 *
 * @author wangkang
 */
@Data
public class ErrorResult implements Serializable {
    /**
     * 描述 : id
     */
    private static final long serialVersionUID = 1L;

    /**
     * 描述 : 异常时间
     */
    // @ApiModelProperty(value = "异常时间", required = true, dataType = "date")
    private Date date;

    /**
     * 描述 : 异常类名
     */
    // @ApiModelProperty(value = "异常类名", required = true, dataType = "string")
    private String type;

    /**
     * 描述 : 异常信息
     */
    // @ApiModelProperty(value = "异常信息", required = true, dataType = "string")
    private String message;

    /**
     * 描述 : 详细异常堆栈信息
     */
    // @ApiModelProperty(value = "异常堆栈", required = true, dataType = "string")
    private String stackTrace;

    /**
     * 描述 : 子异常
     */
    // @ApiModelProperty(value = "子异常", required = true, dataType = "object")
    private RestResponse<String> child;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStackTrace() {
        return stackTrace;
    }

    public void setStackTrace(String stackTrace) {
        this.stackTrace = stackTrace;
    }

    public RestResponse<String> getChild() {
        return child;
    }

    public void setChild(RestResponse<String> child) {
        this.child = child;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }



}
