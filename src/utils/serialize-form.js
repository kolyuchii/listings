function getElementName(element) {
    return element.id;
}
export default function (formElement) {
    if (!formElement || formElement.nodeName !== "FORM") {
        return false;
    }
    const formElementItems = formElement.elements;
    const result = {};

    for (let i = 0; i < formElementItems.length; i += 1) {
        const element = formElementItems[i];
        if (element.id === '') {
            continue;
        }
        switch (element.nodeName) {
            case 'INPUT':
                switch (element.type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        result[getElementName(element)] = element.value;
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (element.checked) {
                            result[getElementName(element)] = element.value;
                        }
                        break;
                }
                break;
            case 'file':
                break;
            case 'TEXTAREA':
                result[getElementName(element)] = element.value;
                break;
            case 'SELECT':
                switch (element.type) {
                    case 'select-one':
                        result[getElementName(element)] = element.value;
                        break;
                    case 'select-multiple':
                        for (let j = 0; j < element.options.length; j += 1) {
                            if (element.options[j].selected) {
                                result[getElementName(element)] = element.value;
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (element.type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        result[getElementName(element)] = element.value;
                        break;
                }
                break;
        }
    }
    return result;
}
