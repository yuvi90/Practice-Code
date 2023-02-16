package com.pc;

public class Motherboard {
    private String brand;
    private String model;

    void booting () {
        System.out.println("Booting....");
    }

    public Motherboard(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }
}
