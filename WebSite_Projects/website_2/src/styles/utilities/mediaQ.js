export const bp = {xs: 576, sm: 768, md: 992, xl: 1200, xxl: 1440};

export const mediaQ = (query, size, start=576, end=1440) => {
    if (query === "up") {
        return `@media screen and (min-width: ${size}px)`
    }
    if (query === "down") {
        return `@media screen and (max-width: ${size}px)`
    }
    if (query === "between") {
        return `@media (min-width: ${start}) and (max-width: ${end}px)`
    }
    if (query === "only") {
        return `@media only screen and (max-width: ${size}px)`
    }
    return null;
};