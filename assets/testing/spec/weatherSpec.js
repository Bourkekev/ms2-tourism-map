describe("Weather city input", function(){
    describe("Check input is only string", function(){
        it("should return dublin", function(){
            expect(writeToDocument("dublin")).toBe("dublin");
        });
        it("should return an error if the input is a has numbers", function(){
            spyOn(window, "alert");
            writeToDocument(6);
            expect(window.alert).toHaveBeenCalledWith("Error, that is a number");
        });
        it("should return an Alert error if the input is empty", function(){
            spyOn(window, "alert");
            writeToDocument();
            expect(window.alert).toHaveBeenCalledWith("Nothing submitted");
        });
    });
});