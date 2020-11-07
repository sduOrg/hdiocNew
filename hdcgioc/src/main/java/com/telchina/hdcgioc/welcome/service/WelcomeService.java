package com.telchina.hdcgioc.welcome.service;

import com.telchina.hdcgioc.welcome.entity.WelcomeData;
import com.telchina.hdcgioc.welcome.mapper.WelcomeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WelcomeService {

    @Autowired
    private WelcomeMapper welcomeMapper;

    public void saveData(String chinese,String engish,String imgsave,String imgnum) {
      
        welcomeMapper.saveData(chinese,engish,imgsave,imgnum);
     
    }
    public Map<String, Object> readingData() {
        Map<String, Object> resultMap = new HashMap<>();
        List<WelcomeData> model = welcomeMapper.readingData();
        resultMap.put("model", model);
        return resultMap;
    }
}
