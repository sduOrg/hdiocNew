package com.telchina.hdcgioc.welcome.entity;

import lombok.Data;

import java.util.Date;
@Data
public class wenshu_info {
    private int id;
    private String case_no;
    private String case_content;
    private String person_name;
    private String person_type;
    private Date person_birthday;
    private int person_age;
    private String person_sex;
    private String person_job;
    private String residence;
    private String person_address;
    private String person_edu;
    private String result_type;
    private String penalty_name;
    private String penalty_prison_type;
    private float  penalty_prison_length;
    private double penalty_addition_money;
    private double penalty_compensate_money;
    private String penalty_addition_politics;
    private Date  restricted_date;
    private Date arrest_date;
    private Date prosecutors_date;
    private Date decision_date;
    private String civil_plaintiff;
    private String public_prosecutor;

}
