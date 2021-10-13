import { paramMock } from "../utils"

export function mockDataAbility() {
    const dataAbilityMock = {
        createRdbPredicates: function (...args) {
            console.warn("DataAbility.createRdbPredicates interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
    };
    const rdbPredicates = {
        equalTo: function (...args) {
            console.warn("RdbPredicates.equalTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notEqualTo: function (...args) {
            console.warn("RdbPredicates.notEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        beginWrap: function (...args) {
            console.warn("RdbPredicates.beginWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        endWrap: function (...args) {
            console.warn("RdbPredicates.endWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        or: function (...args) {
            console.warn("RdbPredicates.or interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        and: function (...args) {
            console.warn("RdbPredicates.and interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        contains: function (...args) {
            console.warn("RdbPredicates.contains interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        beginsWith: function (...args) {
            console.warn("RdbPredicates.beginsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        endsWith: function (...args) {
            console.warn("RdbPredicates.endsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        isNull: function (...args) {
            console.warn("RdbPredicates.isNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        isNotNull: function (...args) {
            console.warn("RdbPredicates.isNotNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        like: function (...args) {
            console.warn("RdbPredicates.like interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        glob: function (...args) {
            console.warn("RdbPredicates.glob interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        between: function (...args) {
            console.warn("RdbPredicates.between interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notBetween: function (...args) {
            console.warn("RdbPredicates.notBetween interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        greaterThan: function (...args) {
            console.warn("RdbPredicates.greaterThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        lessThan: function (...args) {
            console.warn("RdbPredicates.lessThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        greaterThanOrEqualTo: function (...args) {
            console.warn("RdbPredicates.greaterThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        lessThanOrEqualTo: function (...args) {
            console.warn("RdbPredicates.lessThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        orderByAsc: function (...args) {
            console.warn("RdbPredicates.orderByAsc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        orderByDesc: function (...args) {
            console.warn("RdbPredicates.orderByDesc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        distinct: function (...args) {
            console.warn("RdbPredicates.distinct interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        limitAs: function (...args) {
            console.warn("RdbPredicates.limitAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        offsetAs: function (...args) {
            console.warn("RdbPredicates.offsetAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        groupBy: function (...args) {
            console.warn("RdbPredicates.groupBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        indexedBy: function (...args) {
            console.warn("RdbPredicates.indexedBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        in: function (...args) {
            console.warn("RdbPredicates.in interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
        notIn: function (...args) {
            console.warn("RdbPredicates.notIn interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return rdbPredicates;
        },
    };
    const dataAbilityPredicates = {
        equalTo: function (...args) {
            console.warn("DataAbilityPredicates.equalTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        notEqualTo: function (...args) {
            console.warn("DataAbilityPredicates.notEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        beginWrap: function (...args) {
            console.warn("DataAbilityPredicates.beginWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        endWrap: function (...args) {
            console.warn("DataAbilityPredicates.endWrap interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        or: function (...args) {
            console.warn("DataAbilityPredicates.or interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        and: function (...args) {
            console.warn("DataAbilityPredicates.and interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        contains: function (...args) {
            console.warn("DataAbilityPredicates.contains interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        beginsWith: function (...args) {
            console.warn("DataAbilityPredicates.beginsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        endsWith: function (...args) {
            console.warn("DataAbilityPredicates.endsWith interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        isNull: function (...args) {
            console.warn("DataAbilityPredicates.isNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        isNotNull: function (...args) {
            console.warn("DataAbilityPredicates.isNotNull interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        like: function (...args) {
            console.warn("DataAbilityPredicates.like interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        glob: function (...args) {
            console.warn("DataAbilityPredicates.glob interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        between: function (...args) {
            console.warn("DataAbilityPredicates.between interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        notBetween: function (...args) {
            console.warn("DataAbilityPredicates.notBetween interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        greaterThan: function (...args) {
            console.warn("DataAbilityPredicates.greaterThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        lessThan: function (...args) {
            console.warn("DataAbilityPredicates.lessThan interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        greaterThanOrEqualTo: function (...args) {
            console.warn("DataAbilityPredicates.greaterThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        lessThanOrEqualTo: function (...args) {
            console.warn("DataAbilityPredicates.lessThanOrEqualTo interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        orderByAsc: function (...args) {
            console.warn("DataAbilityPredicates.orderByAsc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        orderByDesc: function (...args) {
            console.warn("DataAbilityPredicates.orderByDesc interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        distinct: function (...args) {
            console.warn("DataAbilityPredicates.distinct interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        limitAs: function (...args) {
            console.warn("DataAbilityPredicates.limitAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        offsetAs: function (...args) {
            console.warn("DataAbilityPredicates.offsetAs interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        groupBy: function (...args) {
            console.warn("DataAbilityPredicates.groupBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        indexedBy: function (...args) {
            console.warn("DataAbilityPredicates.indexedBy interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        in: function (...args) {
            console.warn("DataAbilityPredicates.in interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
        notIn: function (...args) {
            console.warn("DataAbilityPredicates.notIn interface mocked in the Previewer. How this interface works on the" +
              " Previewer may be different from that on a real device.")
            return dataAbilityPredicates;
        },
    }
    return dataAbilityMock;
}