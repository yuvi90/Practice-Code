package com.pc;

public class Case {
    private String brand;
    private String type;

    public void powerOn(){
        System.out.println("Turning PC on.");
    }

    public Case(String brand, String type) {
        this.brand = brand;
        this.type = type;
    }

    public String getBrand() {
        return brand;
    }

    public String getType() {
        return type;
    }
}
