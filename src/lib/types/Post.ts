import type { Source } from "./Source";

/**
 * Typ dla pojedynczego posta
 * @typedef {Object} Post
 * @property {string} title - tytuł posta
 * @property {string} date - data posta
 * @property {number} importance - ważność posta (0 - najważniejszy, 1 - ważny, 2 - mniej ważny)
 * @property {string[]} tags - tagi posta
 * @property {Source[]} sources - źródła posta
 * @property {any} content - zawartość posta
 * @property {string} image_url - url do obrazka posta
 * @property {string[]} affiliated_people - osoby powiązane z postem
 * @property {string} slug - slug posta (relatywna ścieżka URL do posta)
 * @property {string} short_desc - krótki opis posta
 */
export type Post = {
    title: string;
    date: string;
    importance: number;
    tags: string[];
    sources: Source[];
    content: any;
    image_url: string | undefined;
    affiliated_people: string[] | undefined;
    slug: string | undefined;
    short_desc: string | undefined;
}