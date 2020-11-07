package com.telchina.hdcgioc.util;

import java.sql.*;

/***********
 *
 * 王永志 20200509
 *
 * **************/

public class JDBCUtils {

    //提供获取连接的方法
    private static Connection connection = null;

    //获取数据库连接对象
    public static Connection getConnection() {
        Connection conn = null;
        try {
            //获取驱动
            String Driver = PropertiesUtil.getProperty("tel.datasource.driver-class-name");
            Class.forName(Driver);
            //获取 连接池
            String url = PropertiesUtil.getProperty("tel.datasource.url");
            String username = PropertiesUtil.getProperty("tel.datasource.username");
            String password = PropertiesUtil.getProperty("tel.datasource.password");
            conn = DriverManager.getConnection(url, username, password);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            throw new RuntimeException(e + "数据库连接失败");
        }

        connection = conn;
        return conn;
    }

    //关闭数据库的方法
    public static void close(ResultSet rs, Statement sta, Connection conn) {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        if (sta != null) {
            try {
                sta.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }

    public static void close(Statement sta, Connection conn) {
        if (sta != null) {
            try {
                sta.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }

}