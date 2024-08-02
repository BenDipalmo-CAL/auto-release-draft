
// import * as semver from 'semver'

export function isSemVer(version: string): boolean {
  // return semver.valid(version) != null
  return true;
}

export function isPreRelease(version: string): boolean {
  // return semver.prerelease(version) != null
  return false;
}

export function removePrefix(version: string): string {
  // const parsedVersion = semver.valid(version)
  // return parsedVersion ? parsedVersion : version
  return version;
}
