import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Restaurant Name",
            validation: (Rule) => Rule.required()
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short Description",
            validation: (Rule) => Rule.max(200)
        },
        {
            name: "image",
            type: "image",
            title: "Image Of The Restaurant",
        },
        {
            name: "lat",
            type: "number",
            title: "Latitude Of The Restaurant",
        },
        {
            name: "long",
            type: "number",
            title: "Longitude Of The Restaurant",
            
        },
        {
            name: "address",
            type: "string",
            title: "Restaurant Address",
            validation: (Rule) => Rule.required()
        },
        {
            name: "rating",
            type: "number",
            title: "Enter a Rating Number From 1 to 5",
            validation: (Rule) =>{
                Rule.required()
                    .min(1)
                    .max(5)
                    .error("Please Enter a valid number between 1 and 5")
            }
        },
        {
            name: "type",
            type: "string",
            title: "Category",
            validation: (Rule) => Rule.required(),
            type: "reference",
            to: [{type: "category"}]
        },
        {
            name: "dishes",
            type: "array",
            title: "Dishes",
            validation: (Rule) => Rule.required(),
            of: [{ type: "reference", to:[{ type: "dish"}] }]
        },
      
    ],
})
