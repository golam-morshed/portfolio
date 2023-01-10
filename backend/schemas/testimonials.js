export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "Company Name",
            type: "string"
        },
        {
            name: "imageurl",
            title: "ImageURL",
            type: "image",
            option: {
                hotspot: true,
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "text"
        },
    ]
}