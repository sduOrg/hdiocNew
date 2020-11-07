package com.telchina.hdcgioc.util;


import org.springframework.util.StringUtils;

public class SpecialCharacherUtils {
    public static String toMyString(String oldString) {
        if(StringUtils.isEmpty(oldString)){
            return oldString;
        }

        String symbol = "";
        if(oldString.contains("%")){
            symbol = "%";
        }else if(oldString.contains("_")){
            symbol = "_";
        }else if(oldString.contains("[")){
            symbol = "[";
        }else if(oldString.contains("]")){
            symbol = "]";
        }
        if (!StringUtils.isEmpty(oldString)) {
            int length = oldString.length();
            String repString = "*";
            int flag = oldString.indexOf(symbol);
            String newString1 = oldString.substring(0, flag);
            String newString2 = oldString.substring(flag, length);
            String newString = newString1 + repString + newString2;
            return newString;
        } else {
            return oldString;
        }
    }
}

