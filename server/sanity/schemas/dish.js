import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name Of The Dish",
            validation: (Rule) => Rule.required()
        },
        {
            name: "shortDescription",
            type: "string",
            title: "Short Description",
            validation: (Rule) => Rule.required()
        },
        {
            name: "price",
            type: "number",
            title: "Price Of The Dish in TL",
            validation: (Rule) => Rule.required()
        },
        {
            name: "image",
            type: "image",
            title: "Image Of The Dish",
            validation: (Rule) => Rule.required()
        }
    ]
    
})
