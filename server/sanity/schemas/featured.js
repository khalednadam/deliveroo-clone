export default{
    name: "featured",
    title: "Featured Menu Categories",
    type: "document",
    fields:[
        {
            name: "name",
            type: "string",
            title: "Featured Category Name",
            validation: (Rule) => Rule.required()
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short",
            validation: (Rule) => Rule.max(200)
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        },
    ]
}