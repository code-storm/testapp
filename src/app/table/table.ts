export interface TableResponse {
    hitsPerPage: number,
    hits: Hits[]
    exhaustiveNbHits: boolean,
    nbHits: number,
    page: number,
    params: string,
    processingTimeMs: number,
    query: string
}

export interface Hits {
    author: string,
    created_at: string,
    objectID: string,
    title: string,
    url: string
}