package com.telchina.hdcgioc.welcome.controller;

import com.telchina.hdcgioc.welcome.service.WelcomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/welcome")
public class WelcomeController {

    @Autowired
    private WelcomeService welcomeService;

    @RequestMapping("/saveData")
    public void saveData(String chinese,String engish,String imgsave,String imgnum) {
         welcomeService.saveData(chinese,engish,imgsave,imgnum);
    }
    @RequestMapping("/readingData")
    public Map<String, Object> readingData() {
        return welcomeService.readingData();
    }
}
