package com.pc;

public class Resolution {
    private int height;
    private int width;

    void displayRes(){
        System.out.println("Resolution : " + this.height + " x "+ this.width);
    }

    public Resolution(int height, int width) {
        this.height = height;
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public int getWidth() {
        return width;
    }
}
