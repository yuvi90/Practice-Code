package com.pc;

public class Main {
    public static void main(String[] args) {
        Case theCase = new Case("CoolerMaster", "Mid-Tower");
        Monitor theMonitor = new Monitor("BenQ", "PD27OO4K", 27, new Resolution(4000,3800));
        Motherboard theMobo = new Motherboard("Gigabyte", "450B Pro Gaming");

        PC myPC = new PC(theCase,theMonitor ,theMobo);
        myPC.getTheCase().powerOn();
        myPC.getTheMobo().booting();
        myPC.getTheMonitor().getNativeRes().displayRes();
        myPC.getTheMonitor().view();
    }
}
