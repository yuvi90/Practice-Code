package com.pc;

public class PC {
    private Case theCase;
    private Monitor theMonitor;
    private Motherboard theMobo;

    public PC(Case theCase, Monitor theMonitor, Motherboard theMobo) {
        this.theCase = theCase;
        this.theMonitor = theMonitor;
        this.theMobo = theMobo;
    }

    public Case getTheCase() {
        return theCase;
    }

    public Monitor getTheMonitor() {
        return theMonitor;
    }

    public Motherboard getTheMobo() {
        return theMobo;
    }
}
