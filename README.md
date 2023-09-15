# Afery PiS

<div align="center">

![grafika](https://github.com/stackingsaunter/Afery-PiS/assets/68239231/42897529-9fdc-46a4-92ed-632c089564b2)

Skrót i geneza wszystkich afer PiS, wraz ze źródłami

</div>

Skompilowane przez Eryka Kaweckiego, opublikowane na grupie facebook'owej Jak będzie w akapie? 14.09.2023

Pierwotna wersja strony internetowej zaprogramowana została przez Cypriana Gburka.

## Spis Treści

1. [Opis](#opis)
2. [Instalacja](#instalacja)
3. [Użyte technologie](#użyte-technologie)
4. [Licencja](#licencja)
5. [Kontakt](#kontakt)
6. [Kontrybucja](#kontrybucja)

## Opis

Afery PiS to repozytorium oraz strona internetowa, które mają na celu zebrać wszystkie afer PiS w jednym miejscu. Znajdują się tu zarówno afery, które miały miejsce w przeszłości, jak i te, które mają miejsce obecnie. Każda afera zawiera opis, źródła oraz linki do artykułów, które ją opisują.

Jako kontrybutorzy do repozytorium, dostarczamy platformę informacyjną zajmującą się zbieraniem i analizą negatywnych aspektów związanych z działalnością partii Prawo i Sprawiedliwość (PiS). Naszym celem jest dostarczanie obiektywnych informacji i analiz, które pomagają społeczeństwu śledzić i oceniać działania tej partii.

Nasz zespół składa się z wolontariuszy, którzy nie są związani z żadną partią polityczną. Nie otrzymujemy żadnych funduszy zewnętrznych, a nasze działania finansujemy z własnych środków. Nie jesteśmy związani z żadną organizacją pozarządową. Większość członków zespołu jest związana z branżą IT, dzięki czemu możemy wykorzystywać nowoczesne technologie do naszych celów. Jako członkowie społeczności _Jak Będzie w Akapie_ wierzymy w otwartość i transparentność, dlatego też nasze działania są jawne i dostępne dla każdego, kto chce się z nimi zapoznać, przez publicznie dostępne repozytorium projektu na platformie GitHub.

Zachęcamy do udziału w procesie dziennikarskim poprzez dostarczanie informacji i opinii na temat działań PiS. Nasza misja to zapewnienie transparentności w polityce i stworzenie przestrzeni dla konstruktywnej debaty publicznej.0

## Instalacja

W celu instalacji i uruchomienia aplikacji lokalnie, należy wykonać następujące kroki:

1. Sklonować repozytorium

```sh
git clone
```

2. Zainstalować wymagane zależności

```sh
npm install
```

3. Uruchomić aplikację

```sh
npm run dev
```

4. (opcjonalnie) Żeby uruchomić aplikację z live reloadem, należy uruchomić aplikację następującą komendą

```sh
npm run dev -- --open
```

5. (opcjonalnie) Żeby uruchomić aplikację produkcyjną, należy zbuildować aplikację następującą komendą

```sh
npm run build
```

po czym uruchomić ją następującą komendą

```sh
npm run preview
```

W celu produkcyjnego uruchomienia aplikacji należy zakodować odpowiedni adapter dla środowiska w którym ma zostać uruchomiona. Więcej informacji na ten temat można znaleźć w dokumentacji poniżej:
[adapter](https://kit.svelte.dev/docs/adapters) - https://kit.svelte.dev/docs/adapters

## Użyte technologie

- [SvelteKit](https://kit.svelte.dev/) - framework webowy
- [Svelte](https://svelte.dev/) - framework komponentowy
- [TailwindCSS](https://tailwindcss.com/) - framework CSS
- [Skeleton](https://www.skeleton.dev/) - UI Toolkit integrujący TailwindCSS ze Svelte
- [PostCSS](https://postcss.org/) - preprocessor CSS
- [TypeScript](https://www.typescriptlang.org/) - język programowania
- [JavaScript](https://www.javascript.com/) - język programowania
- [Vite](https://vitejs.dev/) - bundler
- [Prettier](https://prettier.io/) - formatter
- [ESLint](https://eslint.org/) - linter

## Licencja

Strona internetowa oraz repozytorium są udostępnione w ramach publicznej domeny.

## Kontakt

Jeśli masz jakieś pytania, możesz skontaktować się z którymś z naszych członków.

## Kontrybucja

Jeśli chcesz dołączyć do naszego zespołu, skontaktuj się z jednym z kontrybutorów naszego projektu. W celu dodania nowej afery, należy wykonać następujące kroki:

1. Sklonować repozytorium i uruchomić aplikację lokalnie (do testów) według instrukcji w sekcji [Instalacja](#instalacja)
2. Dodać nowy plik w folderze `src/routes/afery` o nazwie `nazwa-afery.md` (upewnij się, że nazwa nie jest już wykorzystana). Plik powinien powinien zostać zapisany w następującym formacie:

```md

---
title: Nazwa afery
date: data afery (w formacie DD.MM.RRRR)
short_desc: krótki opis afery (max 200 znaków) - będzie wyświetlany na stronie głównej
importance: (1 - 5) - ważność afery (1 - jedna z najważniejszych, 5 - mniej ważna)
tags: [tag1, tag2, tag3] - tagi afery, które będą wyświetlane na stronie głównej i dzięki którym będzie można filtrować afery
image_url: 'adres url zdjęcia podglądowego afery' - zdjęcie podglądowe afery, które będzie wyświetlane na stronie afery (może być puste)
sources: [
    {
        source: 'nazwa źródła, np. OKO.press',
        link: 'adres url artykułu źródłowego'
    },
    ... - kolejne źródła afery
]
---

Szczegółowy opis afery 
```

3. Zaproponować zmiany w repozytorium poprzez pull request (PR) do brancha `main` (upewnij się, że PR nie jest pusty i zawiera opis zmian)
4. Zaczekać na review PR przez któregoś z członków zespołu
5. Po zaakceptowaniu PR, zaczekać na zbudowanie strony przez GitHub Actions
6. Sprawdzić czy strona została zbudowana poprawnie i czy zawiera nową afere
7. Zgłosić ewentualne błędy w PR lub do któregoś z członków zespołu
