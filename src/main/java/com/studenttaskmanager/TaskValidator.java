package com.studenttaskmanager;

public final class TaskValidator {

    private TaskValidator() {
    }

    public static boolean isValidTitle(String title) {
        return title != null && !title.trim().isEmpty();
    }
}