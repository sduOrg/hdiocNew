package com.telchina.hdcgioc.util;

import cn.hutool.json.JSONObject;
import com.google.gson.Gson;
//import com.telchina.devarch.jsoncore.json.GsonUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WeaterUtils {
    // 天气标志

    @SuppressWarnings("serial")
    private static final Map<String, String> weather = new HashMap<String, String>() {
        {
            put("晴", "sunny.png");
            put("多云", "cloudy.png");
            put("阴", "over-cast.png");
            put("阵雨", "shower.png");
            put("雷阵雨", "thundershower.png");
            put("雷阵雨伴有冰雹", "thundershower_with_hail.png");
            put("雨夹雪", "sleet.png");
            put("小雨", "light_rain.png");
            put("中雨", "moderate_rain.png");
            put("大雨", "heavy_rain.png");
            put("暴雨", "storm.png");
            put("大暴雨", "storm.png");
            put("特大暴雨", "storm.png");
            put("阵雪", "snow_flurry.png");
            put("小雪", "light_snow.png");
            put("中雪", "moderate_snow.png");
            put("大雪", "heavy_snow.png");
            put("暴雪", "snowstorm.png");
            put("雾", "fog.png");
            put("冻雨", "ice_rain.png");
            put("沙尘暴", "duststorm.png");
            put("小到中雨", "moderate_rain.png");
            put("中到大雨", "heavy_rain.png");
            put("暴雨到大暴雨", "storm.png");
            put("大暴雨到特大暴雨", "storm.png");
            put("小到中雪", "light_snow.png");
            put("中到大雪", "moderate_snow.png");
            put("大到暴雪", "heavy_snow.png");
            put("浮沉", "dust.png");
            put("扬沙", "sand.png");
            put("强沙尘暴", "sandstorm.png");
            put("浓雾", "dense_fog.png");
            put("强浓雾", "dense_fog.png");
            put("霾", "haze.png");
            put("中度霾", "moderate_haze.png");
            put("重度霾", "severe_haze.png");
            put("严重霾", "hazardous_haze.png");
            put("大雾", "heavy_fog.png");
            put("特强浓雾", "dense_fog.png");
            put("刮风", "cloudy.png");
        }


    };
    /*
     * 实况天气图标获取格式转换
     */


    public static List<Map> dealCurrentJSON(String json) {
        List<Map> result = new ArrayList<>();
        JSONObject params = new JSONObject(json);
//        Map<String, Object> params = GsonUtils.toMap(json, Object.class);
        Gson gson = new Gson();
        Map<String, Object> params2 =params.getJSONObject("result");
            System.err.println(params2);
            List tq =(List) params2.get("daily");
            for (int i=0;i<tq.size();i++){
                Map<String,Object> tpmap=(Map<String, Object>) tq.get(i);

             Map<String,String>  night=(Map<String, String>) tpmap.get("night");
                Map<String,String>  day=(Map<String, String>) tpmap.get("day");
                String tq1=day.get("weather");
                String wd=night.get("templow")+"-"+day.get("temphigh");
                String date=(String) tpmap.get("date");
                String f=day.get("winddirect")+day.get("windpower");
                Map<String,String> result1=new HashMap<>();
                result1.put("tqbz", weather.get(tq1));
                result1.put("wd",wd);
                result1.put("date",date);
                result1.put("tq1",tq1);
                result1.put("f",f);
                result.add(result1);
            }


        return result;
    }
    }
