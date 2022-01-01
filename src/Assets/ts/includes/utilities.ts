import {settings} from "../configs/settings";

export function get_title_arr(): string[] {
    return get_title_full().split(' || ');
}

export function get_title(): string | undefined {
    return get_title_arr().shift();
}

export function get_title_full(): string {
    return document.title;
}

export function update_title(content: string): void {
    let app_name = get_title_arr() !== [] ? get_title_arr().pop() : settings.appname;

    document.title = `${content} || ${app_name}`;
}