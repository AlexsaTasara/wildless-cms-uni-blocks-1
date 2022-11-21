# Правила для проверяющих MR/PR

**Главное правило**: никогда не отмечать request как **approved**, не посмотрев его (даже если это поднятие версии)

## Написание комментариев

1.  Ознакомиться с внесёнными изменениями (если реквест большой, в описании будут указаны ключевые изменения)
1.  Если возможно внести изменение/исправление, то оставить комментарий, в котором предложить свой вариант
1.  Если изменение небольшое, то можно использовать hotkey `Ctrl + G`, предварительно выделив текст, появится шаблон для `suggestion`, которую легко можно применить через интерфейс git
1.  Если какое-то **решение**(алгоритм участок кода и т.д.) трудно для понимания, необходимо оставить вопрос
1.  Если считаете, что в реквест необходимо внести "незначительные изменения", например: вместо `import` указать `import type`, переименовать функцию/переменную, сократить алгоритм, добавить типизацию, то можно ставить `Approve`
1.  Если считаете, что в реквесте содержится много логических ошибок, ошибок декомпозиции или иных серьёзных недочётов, то рекомендуется запросить изменения (`Request Changes`)

Если реквест оформлен как `Draft`, не рекомендуется ставить ему `Approve` до перевода в `Ready for review`

## Закрытие комментариев

1.  Если автор реквеста **согласен** с предложенными изменениям, он их внесёт и отметит комментарий как `Resolved`
1.  Если автор реквеста **не согласен** с предложенными изменениями, будет проведена дискуссия, результат которой **должен** быть отражён в ветке комментария

## Если изменения запрошены (request changes)

Если были запрошены изменения, то закрытия всех комментариев **желательно** повторно проверить реквест, чтобы убедиться, что все изменения внесены корректно. Далее можно менять статус на `Approve`