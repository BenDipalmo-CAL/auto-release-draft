const semver = require('semver')

export function isSemVer(version: string): boolean {
    return semver.valid(version) != null;
}

export function isPreRelease(version: string): boolean {
    return semver.prerelease(version) != null;
}

export function removePrefix(version: string): boolean {
    const parsedVersion = semver.valid(version);
    return parsedVersion ? parsedVersion : version;
}
