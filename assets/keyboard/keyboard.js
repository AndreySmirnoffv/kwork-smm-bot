export const keyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Создание объявления для Avito", callback_data: "obj_avito"}],
            [{text: "Заказать картинки для Avito", callback_data: "image_avito"}],
            [{text: "Анализ, продвижения на Avito", callback_data: "analusis_pr"}],
            [{text: "Анализ статистики объявления", callback_data: "analysis_smm"}],
            [{text: "Пополнить баланс", callback_data: "add_balance"}],
            [{text: "Оферта", callback_data: "oferta"}],
            [{text: "Поддержка", callback_data: "support"}]
        ]
    }
}

export const objBuy = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Заказать", callback_data: "obj_buy"}]
        ]
    }
}

export const getDesign = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Заказать", callback_data: "get_design"}]
        ]
    }
}

export const analysisPr = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Заказать", callback_data: "get_analysis"}]
        ]
    }
}

export const analysisSmm = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Заказать", callback_data: "get_analysis"}]
        ]
    }
}