package com.studenttaskmanager;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TaskValidatorTest {

    @Test
    void acceptsARealTitle() {
        assertTrue(
            TaskValidator.isValidTitle("Revise Maven")
        );
    }

    @Test
    void rejectsBlankTitle() {
        assertFalse(
            TaskValidator.isValidTitle("   ")
        );
    }

    @Test
    void rejectsNullTitle() {
        assertFalse(
            TaskValidator.isValidTitle(null)
        );
    }
}