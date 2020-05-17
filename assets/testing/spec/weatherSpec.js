describe("Weather city input", function(){
    describe("Check input is only string", function(){
        it("should return dublin", function(){
            expect(weatherInputOf("dublin")).toBe("dublin");
        });
        it("should return an error if the input is a has numbers", function(){
            expect(weatherInputOf(6)).toBe("Error");
        });
    });
});