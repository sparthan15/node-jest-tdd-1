describe("a group of test", () => {
    test.only("first test", () => {
        expect("string value").toEqual("string value")
    })
    fit("second test", ()=>{[
        expect("abc").toEqual("abc")
    ]})
})