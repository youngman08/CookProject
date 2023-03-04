from enum import IntEnum


class Authorization(IntEnum):
    CHIEF = 1
    ADMIN = 2
    VIEW = 3
    EDIT = 4


class Role(IntEnum):
    PUBLIC = 1
    CHIEF = 2
    ADMIN = 3

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_role(cls, role_id: int):
        for key in cls:
            if key.value == role_id:
                return key
        return None


class TicketCategory(IntEnum):
    CHIEF_VERIFY = 1

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_category(cls, category_id: int):
        for key in cls:
            if key.value == category_id:
                return key
        return None


class TicketStatus(IntEnum):
    NEW = 1
    PENDING = 2
    RESPOND = 3
    DONE = 4

    @classmethod
    def check_next_status_validity(cls, current_status, next_status, role_id):
        next_status: TicketStatus = cls.get_status(next_status)
        current_status = cls.get_status(current_status)
        role = Role.get_role(role_id)
        if role == Role.ADMIN:
            return current_status in (TicketStatus.NEW, TicketStatus.RESPOND) and next_status in \
                   (TicketStatus.DONE, TicketStatus.PENDING)
        else:
            return current_status == TicketStatus.PENDING and next_status == TicketStatus.RESPOND

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_status(cls, status_id: int):
        for key in cls:
            if key.value == status_id:
                return key
        return None


class UnitType(IntEnum):
    GRAM = 1
    MILLILITERS = 2
    CUP = 3
    SPOON = 4
    SLICE = 5
    PIECE = 6

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_type(cls, id: int):
        for key in cls:
            if key.value == id:
                return key
        return None


class DurationType(IntEnum):
    SLOW = 1
    MEDIUM = 2
    FAST = 3

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_type(cls, id: int):
        for key in cls:
            if key.value == id:
                return key
        return None


class FoodCategory(IntEnum):
    ASIAN = 1
    SEA_FOOD = 2
    VEGETARIAN = 3
    KEBAB = 4
    IRANIAN = 5
    FAST_FOOD = 6

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_type(cls, id: int):
        for key in cls:
            if key.value == id:
                return key
        return None


class DifficultyType(IntEnum):
    EASY = 1
    MEDIUM = 2
    HARD = 3

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

    @classmethod
    def get_type(cls, id: int):
        for key in cls:
            if key.value == id:
                return key
        return None
