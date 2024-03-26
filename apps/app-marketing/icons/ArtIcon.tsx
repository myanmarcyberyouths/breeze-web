import {IconPropsInterface} from "@/interfaces/IconProps";

const ArtIcon = ({ width = '40', height = '40' }: IconPropsInterface) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M40 0H0V40H40V0Z" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_44_343" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_44_343"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAACcaifFj0LKjjRrRinanCFPLBPYoUZaOhzWmC7HkDe4ciuybBzIhhXclxR5SB1KKBDdq1FFJg7QjRCDRApVNx2JQwhbOBdqMwonCALhrE/dnCTbnCnJiCWdajtoPhuPaE57OgPbmRqwZyXbqE9QLxTTolKLYDa8e0DFfknlt4BVLQvVpVi8hEPUqmPPolw/GwteOBd/XDjcqVHVkxe1gFJFKQ/fpj7To2COUxvMiAjQjw/MihSYckunf1nZuYZnQiKaaDS2hVOxbCzBjVfcqVHapk7dpEHTlynXnTbVmjDHhgzXnjrfqkvdqEnSlzDirlDXoUnaoT7UmzvdrFfgqUbQlSHhsFfhrEzapUfWnkLUmjXTmCHQkRbYokTaninaoDfOlCvEggbgrE/ksVTgrFPVmivcoTHXmifMjhbZqVf43z3HiR7LihDQoFb45EfYnC7OkR/CghLVpFDRoE7JjyoqwuWfMcbNlDXfqU/7UzvRmTfKkCNSIQaoTMTSlz1q5jxFzyoqo9+XQLX7ZE7UlRgjwBYqsuayU9GiQb+LJb33zCpBHQcups+BJbRnJqrlr03QmkWyhDa8fQ2ZMr/nslG+iCM4xSEOtAsyyfMpu+8uu95PpdepPs34RU3IlUm3ikT6az7EjD3fqDde3jVT1TD41CwZuBAns9SoWrJ3Tnb6j2TgsV2tfkjIjDJ7VirTnCZ1H6n7gW6udmL7fFrIoitovOU3lcaNNr6RQ6b46lWTZy+kairpuSZYtcUicKT7oYK+hWayk1eUhlbDmVJ07EaD0EOYdTu+izPBfTKWXyRqRCFNuudit+BFr947iLsli7iZV4lnhIjonmeU5mVtdGTKkFbeW0zuzUbWR0HowDhb1zRyxzGxgx6hjx1rjRVKnxNKk8Ztn59/QJ5HfJxhJ5v1upauZZSIqY6XnnLjb1LOY0jqOUjariH8zK9unYo7Z4h6bXq6s0KRmyR1miJ4gxI4mQ99sp1ZdYPntnixyVvyVT2lujAkpAyOwmndAAAARXRSTlMACRwQG/6GPE4xKP7+gGP+/tvHtZ0v/v39+urGsldIEv7+5a2sqYBx/fz56sm9YfLp07Sak3FvTf399uTb0aiN8uzb2K2kpDQIAAAJmElEQVRYw+zTS2jTcBwHcK0W6dwKUk9u8zDFx30iqCcV+k+yLmr1z7SJaTpoE9rSJJBRWcB20PZQenCDdrYexK5bL45eamGwCQ6nwl6Ig7H3ZIftMHw/EAV/qTJ1OqZe9cs/LTnkw/f/2vI///NPZFuFqba2So+5dofJsPWvkK0mc73lxPFjfspFuVwUG6k7YamqrfhTzGC2HGdZVvRDKD1asSj6RfG4xWza9gdtai3HXC6RZWUMlEhRytDQ/SdPXvIsC80s5t/tZagHBsJiLMtQS6TmwuGuEFAfijgSYSJ19Ud/p1aFhSo7sDB6JwaL4uxCVJe6wuGZlwzLRCJ1NeZNKYOFgpQhisWsyAjYr8xHo6lcKBftiYaHihGGMXLG6s2oKtgmX1kCT5+YzIjKmx4gQl2pNYnjIptQe08oLkr0K0n481OiLrGMb6GzJ5oKhXLhVCo1/TESYRmjkeE8NTs23rB9Pp+iUO3PBgaWH1J+HxthZRkD1NmTyt0HKRzODWGjUeD0h6urMmxUaKdPgTxNt7S0DKwk/SLDYNi8+U69UleoazqXm57RjBwneDiOA2qjUrs7lA4YAOXz+djAik9mIHju01cJMv1KZnREkjhBQEKd+VenavspxdUBGYxlMhkoFXv6EHMFY0GbewtS+QyEZpIIY45zZycnp7IIud31hl/MrJKioJEyWwKnnIF7gsQVsDb75m1nNBXOdc3MaciNGY6fCvQFvFNZiRRqKn6CDgLkVyil41k6k8nnE4lEfnRF4NzwpTY7vzD/+vWrpMYjeMf8arcueSenPFK1aT20r9JP+WG0J9ItmXxifLx0I9OyLEkCKjBY9iWTqsojpIEEv/1lKeCNZ93V65Z8275Knwi33D8Yg/Vp0xuNDl+//o6QGMwUBKOAEOJ5hGXGTUpqctXbFwgE+rzxfgmk9ZBPhiv2oDQ8PNzWFovF0tchyx4EEBI4AbroQxYEtztZ6O7zQqVAWTL9BGmyLPsmbty5MzIKkg6l2+4JiGGQxIFESm4SikkSUvvjZcYb6I47ieqKH871ToA0GaPkY5DujEKpdDqWKD3GpBsxbo/HI5CkRMI60SSpFuLd3rLUHc86nTWG728sQKqqYZ5vB2lkZKQNkiiNPdaQBJQueUiahEEQJK1y/UDpziRxzmrd/90dPnKoF+uSDNKLxRt6AFocG8Q86SRIJH2RHCRNOJ0kUHgVrHi88ZL1wgXrgW9nfMfhR4hX9T2maXXw/d3x8bHF0tjSA5WmkdNDkITHAwJIDofTSTgcRLBX5YvF1muNNluTbc/RNchw8hHN8yrPQ327o/f2xPO7kIlKDfE0zAuUc2WAbiUIp0TSDfBiv3z2bKPtTJPN1rzLtLbapw/10jQdDAZbHQ673R5sn3i+tDSY5AWwaU8264RPoZgDFslpzTbYiYZz1gu2piZbU/MVW/OVb8tUe/hRA023Bq8Gr9ob7Jcu2YO3brb30gRJQlOQrA3gkPpjbbx27XIj5GJjcxNIwFxpPn9gbW6f2y+b0KbBMI5bHKU6YR8414ofE5zT+a34dfDbvEFJYtImJGkhTJJcctglgfWDtof20JbStaM92na7dW0d2h02tsMmA3WehrCxs6igIngULz7ptK1fKIo3/xBIy8vv/T//932ftz3afs/t8QTC4bDbHXZJgAp4vQQBFjxgdYjDCRdEQxBUZm6qo2N5ghQoUZAFqMwnY5gKxTXWrT3sdrkAlHGDJHicLhdBQCieesRDBHwawtFcx5XeYDC4LEFhMinQgAGxpy1NS0/cpsIZBiS5GUmSIC1PwEXc9BAEcfOWB0icccrWY7OecDg6XJxA+xioS1UxnW2u3O6D28KMKbebQSbKJAEESE4QkMAbQXXVT2lPv8MxhZP064/j5Weqqmoa28h789H2dolBIMDo8CJlVlczmYwrQEiiKOJOwjV000V1bRwIy1mH4zHlXvOPT5fLz1iW1XY2+sCW6/P3RIQhBmkMcMTFSLxUWlmpBQinBF+IEkHgTlw+9nm41TGPS4fy/vFyubzwoaJpp5vnpDofRgjDENJ0hIxSLFaKREKzNe8t2BASyI3juPBl5rbuOQ4z3gAJTL17WdG6tjaayaX5bQyATGmoUIplZ2cjoVBkpeqtB4U7JZEiha5zlg1LYyKLFdb9Ub9/fOHdYOX8sebPiIvL7RjmwzAzvuHS3WxqNh6KRyLPV4q3vQEn+IFNSJI7T2/ZbLFsPRqgeLaw5o8CKbqwMAi1NbTn6vITFWrDFFXVX8WAEQJHMzMzs7UAeMI5kExx5M4ju3Z1MZJP4Y3X+egDP5AevBw80tKYBq5eeKxCSCpPD5dioXgoFAtlE4lUIlKDLYZTQk6gSB9J+kTJR/lYRWEPvc0/qJMWXg629G/LwIUdEwqUx9OLMzPxUCwWi2ez2cTISGTV6RZJWlFo2NAyTcPp4Hklp+pvTNI4WCoPQkhN0vYdQFJVmq6lEneBE4rHR0zFX4XNA59O5wAFDDqt8EBStOG1fHR6OhqdHn92eVOL9pok2ofJizN3TY3E4cmOZLOhxSEgpXPpNLiiVVUBEEjVC2v5PHAaoCZp344JgUJMLTKyoSxklErFSxmnU5SNQoFRTFQOQCzL85hReLO+vv42//o8gFrVZpLSJCZWn6cSoNR9U6lU4pUTR0dPnbzSO1U0SwMSgCo80o2lpeLBQ6vHIaNvSfsm0hxJVSdHgTI6OvrixSholuH2t1nabP0nkh0TvErnZExj2QqLdH0YdP44rNr3pDGa46hC36SJeD5p6v2iQNcbocXWnQzOI16VSVQnGbphkhr7qDUnu32e5nBO8lb7Jmtjj73ee14XJZD7LRszWcFUQcVUhExTyKiDYJbvSVa7/YIu4NA8bt+5bZ4zHB6K+3JiwVTQPgaNEUM69CLdJB3Z+gMQ9JvDQXuR5oDkgbsIl0h4FSmuYb+nH9qtsUFigTRsRv1Dku1kMDinp8FJ/bSKJMmJcHPs39wwfTj4dEyH9UfQ1oxhuG6/U3NOe5UWOFNwZ8iyKCKROvDVVB1FtsLzFW3pBlj9iSDSw0kYqeQ4Dm4LksKQSera0jqgs/Ppo+rDhw8v/YTTiLQzmZxaAhRJAwlRIoOMPS0Deqwne59O9V0886u/Om1nu5OAKurpHIBEDBPF43u+HmEbGNjTtunX6rGarnrnigYmy4jVlq5BEX+mnrPdJzqTnVDC3KNHfX2XLJv+WHtt1m6ItbceR33b/QUL7un+/lOnBiCOv5fFsum/fl//OK1PxqF2QZ0lJb8AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  )
}

export default ArtIcon
