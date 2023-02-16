package com.pc;

public class Monitor {
    private String brand;
    private String model;
    private int size;
    private Resolution nativeRes;

    void view(){
        System.out.println("Viewing Movie");
    }

    public Monitor(String brand, String model, int size, Resolution nativeRes) {
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.nativeRes = nativeRes;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getSize() {
        return size;
    }

    public Resolution getNativeRes() {
        return nativeRes;
    }
}

