"use server"

import { redirect } from "next/navigation"

const search = async (formData: FormData) => {

    const term = formData.get('term')
    if (typeof term != "string" || !term) {
        redirect('/')
    }
    redirect(`/search?term=${term}`)
}

export default search