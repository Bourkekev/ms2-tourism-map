describe("Weather city input", function(){
    describe("Check input is only string", function(){
        it("should return dublin", function(){
            expect(weatherInputOf("dublin")).toBe("dublin");
        });
        it("should return an error if the input is a has numbers", function(){
            spyOn(window, "alert");
            weatherInputOf(6);
            expect(window.alert).toHaveBeenCalledWith("Error, that is a number");
        });
        it("should return an Alert error if the input is empty", function(){
            spyOn(window, "alert");
            weatherInputOf();
            expect(window.alert).toHaveBeenCalledWith("Nothing submitted");
        });
    });
});