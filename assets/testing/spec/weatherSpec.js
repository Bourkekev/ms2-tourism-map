describe("Weather city input", function(){
    describe("Check input is only string", function(){
        it("should return dublin", function(){
            expect(weatherInputOf("dublin")).toBe("dublin");
        });
    });
});