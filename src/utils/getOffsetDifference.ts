const getOffsetDifference = (offset: number): number => {
    if (offset === 0) {
        return 0
    }

    const localOffset = (new Date()).getTimezoneOffset() * -1 / 60;
    return offset - localOffset;
}

export default getOffsetDifference;
