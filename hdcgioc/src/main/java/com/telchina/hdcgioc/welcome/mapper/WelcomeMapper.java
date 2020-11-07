package com.telchina.hdcgioc.welcome.mapper;


import com.telchina.hdcgioc.welcome.entity.WelcomeData;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WelcomeMapper {
    void saveData(String chinese, String engish, String imgsave, String imgnum);
    List<WelcomeData> readingData();
}
