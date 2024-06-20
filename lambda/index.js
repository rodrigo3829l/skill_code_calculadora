const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a mi calculadora UTHH, por Rodrigo noveno A';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

function isNumber(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
}

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const numUno = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const numDos = handlerInput.requestEnvelope.request.intent.slots.numDos.value;

        if (isNumber(numUno) && isNumber(numDos)) {
            const resultado = parseFloat(numUno) + parseFloat(numDos);
            const speakOutput = `La suma de ${numUno} más ${numDos} es ${resultado}.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Alguna otra operación que deseas que haga?')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, ambos valores deben ser números. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime dos números para sumar.')
                .getResponse();
        }
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const numUno = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const numDos = handlerInput.requestEnvelope.request.intent.slots.numDos.value;

        if (isNumber(numUno) && isNumber(numDos)) {
            const resultado = parseFloat(numUno) - parseFloat(numDos);
            const speakOutput = `La resta de ${numUno} menos ${numDos} es ${resultado}.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Alguna otra operación que deseas que haga?')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, ambos valores deben ser números. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime dos números para restar.')
                .getResponse();
        }
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const numUno = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const numDos = handlerInput.requestEnvelope.request.intent.slots.numDos.value;

        if (isNumber(numUno) && isNumber(numDos)) {
            const resultado = parseFloat(numUno) * parseFloat(numDos);
            const speakOutput = `El resultado de la multiplicación de ${numUno} por ${numDos} es ${resultado}.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Alguna otra operación que deseas que haga?')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, ambos valores deben ser números. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime dos números para multiplicar.')
                .getResponse();
        }
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const numUno = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const numDos = handlerInput.requestEnvelope.request.intent.slots.numDos.value;

        if (isNumber(numUno) && isNumber(numDos)) {
            if (parseFloat(numDos) === 0) {
                const speakOutput = 'No se puede dividir por cero. Por favor, proporciona un divisor diferente.';
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt('Por favor, dime dos números para dividir.')
                    .getResponse();
            } else {
                const resultado = parseFloat(numUno) / parseFloat(numDos);
                const speakOutput = `La división de ${numUno} entre ${numDos} es ${resultado}.`;
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt('¿Alguna otra operación que deseas que haga?')
                    .getResponse();
            }
        } else {
            const speakOutput = 'Lo siento, ambos valores deben ser números. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime dos números para dividir.')
                .getResponse();
        }
    }
};

const RaizCuadradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput) {
        const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;

        if (isNumber(numero)) {
            const resultado = Math.sqrt(parseFloat(numero));
            const speakOutput = `La raíz cuadrada de ${numero} es ${resultado}.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Alguna otra operación que deseas que haga?')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, el valor debe ser un número. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime un número para calcular su raíz cuadrada.')
                .getResponse();
        }
    }
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.base.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.exponente.value;

        if (isNumber(base) && isNumber(exponente)) {
            const resultado = Math.pow(parseFloat(base), parseFloat(exponente));
            const speakOutput = `El resultado de ${base} elevado a la potencia de ${exponente} es ${resultado}.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Alguna otra operación que deseas que haga?')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, ambos valores deben ser números. Por favor, intenta de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Por favor, dime la base y el exponente para calcular la potencia.')
                .getResponse();
        }
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme que realice operaciones matemáticas como sumar, restar, multiplicar, dividir, calcular la raíz cuadrada y elevar a una potencia. ¿Cómo te puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entiendo esa petición. Por favor, intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor, intenta de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        RaizCuadradaIntentHandler,
        PotenciaIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
