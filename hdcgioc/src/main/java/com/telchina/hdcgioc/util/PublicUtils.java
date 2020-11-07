package com.telchina.hdcgioc.util;

//import com.telchina.hdcgioc.sse.enums.RealTimeDataType;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * 工具类
 *
 * @author zhaotiantian
 */
public class PublicUtils {

//    private static Map<RealTimeDataType, CopyOnWriteArrayList<SseEmitter>> sseCache = new ConcurrentHashMap<>();

    /**
     * uuid
     *
     * @return
     */
    public static String uuid() {
        String uuid = UUID.randomUUID().toString().replace("-", "");
        return uuid;
    }


}
